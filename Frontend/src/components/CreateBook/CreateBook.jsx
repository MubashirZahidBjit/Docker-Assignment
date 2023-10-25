import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../Button/Button"; // Import the Button component
import "./CreateBook.css"; // Import the corresponding CSS file
import useBookHook from "../../hooks/useBookHook";

const CreateBook = () => {
  const { createBook } = useBookHook();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle book creation with the form data
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("author", data.author);
    formData.append("stock", data.stock);
    formData.append("description", data.description);
    formData.append("discount_start_date", data.discount_start_date);
    formData.append("discount_end_date", data.discount_end_date);
    formData.append("discounted_price", data.discounted_price);
    formData.append("release_date", data.release_date);
    formData.append("image", data.image);

    createBook(formData);
    console.log(formData);
  };

  return (
    <div className="create-book-container">
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="form-group">
          <h4>Title</h4>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Minimum length must be 3",
              },
              maxLength: {
                value: 30,
                message: "Title must be at most 30 characters",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter title"
                {...field}
                className={errors.title ? "error-input" : ""}
              />
            )}
          />
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </div>
        <div className="form-group">
          <h4>Price</h4>
          <Controller
            name="price"
            control={control}
            rules={{
              maxLength: {
                value: 10,
                message: "Price must be at most 10 characters",
              },
              min: {
                value: 0,
                message: "Price must be a non-negative value",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter price"
                {...field}
                className={errors.price ? "error-input" : ""}
              />
            )}
          />
          {errors.price && (
            <p className="error-message">{errors.price.message}</p>
          )}
        </div>
        <div className="form-group">
          <h4>Author</h4>
          <Controller
            name="author"
            control={control}
            rules={{
              maxLength: {
                value: 50,
                message: "Author name must be at most 50 characters",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter author"
                {...field}
                className={errors.author ? "error-input" : ""}
              />
            )}
          />
          {errors.author && (
            <p className="error-message">{errors.author.message}</p>
          )}
        </div>
        <div className="form-group">
          <h4>Stock</h4>
          <Controller
            name="stock"
            control={control}
            rules={{
              maxLength: {
                value: 10,
                message: "Stock must be at most 10 characters",
              },
              min: {
                value: 0,
                message: "Stock must be a non-negative value",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter stock"
                {...field}
                className={errors.stock ? "error-input" : ""}
              />
            )}
          />
          {errors.stock && (
            <p className="error-message">{errors.stock.message}</p>
          )}
        </div>
        <div className="form-group">
          <h4>Description</h4>
          <Controller
            name="description"
            control={control}
            rules={{
              required: "Description is required",
            }}
            render={({ field }) => (
              <textarea
                placeholder="Enter description"
                {...field}
                className={errors.description ? "error-input" : ""}
              />
            )}
          />
          {errors.description && (
            <p className="error-message">{errors.description.message}</p>
          )}
        </div>
        <div className="form-group">
          <h4>Discount Start Date</h4>
          <Controller
            name="discount_start_date"
            control={control}
            rules={{}}
            render={({ field }) => <input type="date" {...field} />}
          />
        </div>
        <div className="form-group">
          <h4>Discount End Date</h4>
          <Controller
            name="discount_end_date"
            control={control}
            rules={{}}
            render={({ field }) => <input type="date" {...field} />}
          />
        </div>
        <div className="form-group">
          <h4>Discounted Price</h4>
          <Controller
            name="discounted_price"
            control={control}
            rules={{
              min: {
                value: 0,
                message: "Discounted price must be a non-negative value",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter discounted price"
                {...field}
                className={errors.discounted_price ? "error-input" : ""}
              />
            )}
          />
          {errors.discounted_price && (
            <p className="error-message">{errors.discounted_price.message}</p>
          )}
        </div>
        <div className="form-group">
          <h4>Release Year</h4>
          <Controller
            name="release_date"
            control={control}
            rules={{
              required: "Release date is required",
            }}
            render={({ field }) => <input type="number" {...field} />}
          />
          {errors.release_date && (
            <p className="error-message">{errors.release_date.message}</p>
          )}
        </div>
        {/* Image */}
        <div className="form-group">
          <h4>Image</h4>
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange } }) => (
              <input
                type="file"
                placeholder="Enter book's image url"
                className="auth-input-half"
                // value={value.fileName}
                onChange={(e) => onChange(e.target.files[0])}
                // {...field}
              />
            )}
          />

          {errors.author && (
            <p className="error-message">{errors.author.message}</p>
          )}
        </div>
        <div className="form-group">
          <Button
            text="Create"
            type="submit"
            style={{ backgroundColor: "#007bff", color: "white" }}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
