import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ImageUpload({ image, setImage }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  }, [setImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">
        Upload Issue Image
      </h2>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition
        ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-gray-300 bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />

        <p className="text-gray-600">
          Drag & Drop image here
        </p>

        <p className="text-sm text-gray-400 mt-2">
          or click to upload
        </p>
      </div>

      {image && (
        <img
          src={image.preview}
          alt="preview"
          className="mt-6 rounded-xl w-80 shadow-lg"
        />
      )}
    </div>
  );
}

export default ImageUpload;