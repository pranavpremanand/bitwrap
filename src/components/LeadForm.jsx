import React, { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    const data = {
      body: emailBody,
      name: "Bitwrap",
      subject: values.subject,
      to: companyDetails.email,
    };

    try {
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        data
      );

      if (res.data.success) {
        toast.success("Form submitted successfully");
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSpinner(false);
    }
  };
  return (
    <div className="flex flex-col gap-4 py-[5rem] px-5 bg-primary/5">
      <h2
        data-aos="fade-up"
        className="heading-2 text-center max-w-[55rem] mx-auto"
      >
        Ready to spark your brand’s success? <br /> Let's get in touch!
      </h2>
      <p data-aos="fade-up" className="desc text-center max-w-[55rem] mx-auto">
        At Bitwrap, we thrive on collaboration and shared passion. We're not
        just developers; we’re your partners in unlocking your brand's true
        potential. Whether you're bursting with ideas or just beginning to take
        the first step, reach out and let's start the conversation!
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col gap-4 rounded-xl p-5 bg-background w-full max-w-4xl mx-auto mt-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Name</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Email</label>
            <input
              type="email"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Phone</label>
            <input
              type="tel"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Subject</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2">Message</label>
          <textarea
            rows="4"
            className="outline-none p-2 rounded-2xl bg-white/60 text-black border"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="secondary-btn mt-3 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
