import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogItem } from "./Blogs";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import SubHeading from "../components/SubHeading";
import { getBlogBySlug, getBlogs } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));

const BlogDetails = () => {
  const { id: slug } = useParams();

  // Fetch the current blog
  const {
    data: blogData,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const response = await getBlogBySlug(slug);
      return response.data.blog;
    },
  });

  // Fetch all blogs for the "Recent Blogs" section
  const { data: allBlogsData, isLoading: allBlogsLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    },
    enabled: !!blogData, // Only fetch all blogs after the current blog is loaded
  });

  // If blog is not found or there's an error, redirect to blogs page
  if (blogError) {
    return <Navigate to="/blogs" />;
  }

  // Get related blogs (excluding the current one)
  const relatedBlogs = allBlogsData
    ? allBlogsData.filter((item) => item._id !== blogData?._id).slice(0, 3)
    : [];

  // Format the publish date
  const formattedDate = blogData
    ? new Date(blogData.publishDate || blogData.createdAt).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      )
    : "";

  // Dynamic SEO for blog details
  const blogSeoData = blogData
    ? {
        title: `${blogData.title} | Technorich AI Solutions`,
        description:
          blogData.metaDescription ||
          blogData.excerpt ||
          `Read our latest technology insights and software development tips. Stay updated with industry trends and best practices from Technorich AI Solutions.`,
        keywords:
          blogData.metaKeywords?.join(", ") ||
          `technology blog, software development, programming insights, tech trends, Technorich AI Solutions blog`,
        canonicalUrl: `https://www.technorichaisolutions.com/blogs/${slug}`,
        ogImage: blogData.imageUrl,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogData.title,
          image: blogData.imageUrl,
          author: {
            "@type": "Person",
            name: blogData.author?.name || "Technorich AI Solutions",
          },
          publisher: {
            "@type": "Organization",
            name: "Technorich AI Solutions",
            logo: "https://www.technorichaisolutions.com/logo.png",
          },
          datePublished: blogData.publishDate || blogData.createdAt,
          dateModified: blogData.updatedAt,
        },
      }
    : {
        title: "Blog | Technorich AI Solutions",
        description:
          "Read our latest technology insights and software development tips.",
      };

  return (
    <>
      <Helmet>
        <title>{blogSeoData.title}</title>
        <meta name="description" content={blogSeoData.description} />
        {blogSeoData.keywords && (
          <meta name="keywords" content={blogSeoData.keywords} />
        )}
        {blogSeoData.canonicalUrl && (
          <link rel="canonical" href={blogSeoData.canonicalUrl} />
        )}
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={blogSeoData.title} />
        <meta property="og:description" content={blogSeoData.description} />
        {blogSeoData.ogImage && (
          <meta property="og:image" content={blogSeoData.ogImage} />
        )}
        <meta property="og:type" content="article" />
        {blogSeoData.canonicalUrl && (
          <meta property="og:url" content={blogSeoData.canonicalUrl} />
        )}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogSeoData.title} />
        <meta name="twitter:description" content={blogSeoData.description} />
        {blogSeoData.ogImage && (
          <meta name="twitter:image" content={blogSeoData.ogImage} />
        )}
        {/* Structured data for better SEO */}
        {blogData && (
          <script type="application/ld+json">
            {JSON.stringify(blogSeoData.structuredData)}
          </script>
        )}
      </Helmet>
      <WebsiteHeader />
      <PageBanner title={"Blog Details"} />

      <div className="bg-primary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          {/* Loading state */}
          {blogLoading && (
            <div className="w-full text-center py-12">
              <div
                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
              <p className="mt-4 text-lg">Loading blog content...</p>
            </div>
          )}

          {/* Error state */}
          {blogError && (
            <div className="w-full text-center py-12">
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">
                  {" "}
                  Failed to load blog content. Please try again later.
                </span>
              </div>
            </div>
          )}

          {/* Blog content */}
          {!blogLoading && blogData && (
            <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
              <img
                data-aos="fade-up"
                src={blogData.imageUrl}
                alt={blogData.imageAlt || blogData.title}
                className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
              />
              <div className="flex flex-col gap-2">
                <div
                  data-aos="fade-up"
                  className="flex justify-between items-center font-light mt-[0.8rem]"
                >
                  <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                    {blogData.categoryId?.name ||
                      blogData.category?.name ||
                      "Uncategorized"}
                  </div>
                  <p className="text-gray-800 text-[.8rem]">{formattedDate}</p>
                </div>
                <h4
                  data-aos="fade-up"
                  className="heading-2_1 leading-tight mt-[1rem] pb-[1.5rem]"
                >
                  {blogData.title}
                </h4>
                <div
                  data-aos="fade-up"
                  className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
                >
                  <div
                    className="reset-html-content"
                    dangerouslySetInnerHTML={{ __html: blogData.content }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Related blogs section */}
          {!allBlogsLoading && relatedBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <SubHeading heading="Recent Blogs" />
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {relatedBlogs.map((item) => (
                  <BlogItem key={item._id} blog={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

export default BlogDetails;
