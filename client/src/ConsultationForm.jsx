import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";


// ✅ INPUT FIELD
const InputField = ({ label, name, type = "text", value, onChange, error }) => (
    <div className="mb-8">
        <div className="relative">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full border-b-2 outline-none py-2 bg-transparent peer
        ${error ? "border-red-500" : "border-gray-300 focus:border-green-600"}`}
            />
            <label
                className={`absolute left-0 pointer-events-none transition-all
        ${value ? "-top-3 text-sm" : "top-2 text-gray-500"}
        peer-focus:-top-3 peer-focus:text-sm
        ${error ? "text-red-500" : "peer-focus:text-green-600"}`}
            >
                {label} *
            </label>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);


// ✅ TEXTAREA FIELD
const TextareaField = ({ label, name, value, onChange, error }) => (
    <div className="mb-8">
        <div className="relative">
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full border-b-2 outline-none py-2 bg-transparent peer
        ${error ? "border-red-500" : "border-gray-300 focus:border-green-600"}`}
            />
            <label
                className={`absolute left-0 pointer-events-none transition-all
        ${value ? "-top-3 text-sm" : "top-2 text-gray-500"}
        peer-focus:-top-3 peer-focus:text-sm
        ${error ? "text-red-500" : "peer-focus:text-green-600"}`}
            >
                {label} *
            </label>
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);


const ConsultationForm = () => {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        contactNumber: "",
        age: "",
        height: "",
        weight: "",
        healthConcern: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ✅ HANDLE CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });




        // clear error on typing
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    // ✅ VALIDATION
    const validate = () => {
        let newErrors = {};

        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
        if (!formData.age) newErrors.age = "Age is required";
        if (!formData.height) newErrors.height = "Height is required";
        if (!formData.weight) newErrors.weight = "Weight is required";
        if (!formData.healthConcern) newErrors.healthConcern = "Health concern is required";
        if (isNaN(formData.age)) newErrors.age = "Age must be a number";
        if (isNaN(formData.height)) newErrors.height = "Height must be a number";
        if (isNaN(formData.weight)) newErrors.weight = "Weight must be a number";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            await axios.post(
                "http://localhost:8000/api/consultation/create",
                {
                    ...formData,
                    age: Number(formData.age),
                    height: Number(formData.height),
                    weight: Number(formData.weight)
                }
            );

            toast.success("Submitted successfully ✅");
            setSubmitted(true);

        } catch (error) {
            console.error(error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    // ✅ SUCCESS SCREEN
    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f4eded]">
                <div className="bg-white p-10 rounded-lg shadow text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-green-600">
                        Response Submitted ✅
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Our health expert will contact you soon.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-[#5c8018] text-white px-6 py-2 rounded"
                    >
                        Submit another response
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f4eded] min-h-screen py-10">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">

                <h2 className="text-2xl font-semibold mb-6">
                    Need Health Advice?
                </h2>

                <p className="mb-8 text-gray-600">
                    Fill out this form and book a free consultation.
                </p>

                <form onSubmit={handleSubmit}>

                    <InputField label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
                    <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
                    <InputField label="Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} error={errors.contactNumber} />
                    <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} error={errors.age} />
                    <InputField label="Height (cm)" name="height" type="number" value={formData.height} onChange={handleChange} error={errors.height} />
                    <InputField label="Weight (kg)" name="weight" type="number" value={formData.weight} onChange={handleChange} error={errors.weight} />

                    <TextareaField label="Health Concern" name="healthConcern" value={formData.healthConcern} onChange={handleChange} error={errors.healthConcern} />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#5c8018] text-white px-6 py-2 rounded"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ConsultationForm;