import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";

import Editor from "components/common/Blogs/Forms/Editor";
import TextInput from "components/common/Blogs/Forms/TextInput";
import Dropdown from "components/common/Blogs/Forms/Dropdown";
import ImageUploader from "components/common/Blogs/Forms/ImageUpload";
import ImagePreview from "components/common/Blogs/Forms/ImagePreview";
import TagInput from "components/common/Blogs/Forms/TagInput";

import BlogContext from "context/BlogContext";
import ToasterContext from "context/ToasterContext";
import { nanoid } from "nanoid";

const MOCK_DATA_OPTIONS = [
  { id: 1, label: "Publikasikan", value: "Published" },
  { id: 2, label: "Simpan Sebagai Draft", value: "Draft" },
];

export default function AddViews({ data = {} }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const context = useContext(BlogContext);
  const toasterContext = useContext(ToasterContext);

  const [formData, setFormData] = useState({});

  useEffect(() => {}, []);
  useEffect(() => {}, [context]);

  const handleFileChange = (file, name) => {
    setSelectedFile(file);
    setFormData((prev) => ({ ...prev, [name]: URL.createObjectURL(file) }));
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = e.target.elements;

    const id = elements.id.defaultValue;

    const publishDate = new Date().toLocaleDateString().replaceAll("/", "-");

    const statusPublikasiElement = elements.statusPublikasi;
    const statusPublikasi = statusPublikasiElement.value;

    const penulis = elements.penulis.defaultValue;

    const newData = {
      ...formData,
      statusPublikasi,
      id,
      publishDate,
      penulis,
    };

    const updatedData = [...context.data, newData];
    context.updateData(updatedData);

    const successToaster = {
      showToaster: true,
      toasterMessage: 'Success menambahkan data baru!',
    }

    toasterContext.updateData({
      toaster: successToaster,
      ...toasterContext,
    })

    router.push("/admin/blogs");
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className={cx("bg-white rounded shadow-lg relative  p-4")}>
        <div className="flex items-center justify-start p-4 border-b">
          <button onClick={handleGoBack}>
            <i className={"fas fa-chevron-left mr-2 text-sm "}></i>{" "}
          </button>
          <h2 className="ml-2 text-xl font-medium">Add</h2>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="id"
              defaultValue={nanoid(5)}
            />
            <input type="hidden" name="penulis" defaultValue={"Admin"} />
            <TextInput
              handleChange={handleChange}
              data={formData.judul}
              name="judul"
              title="Judul Berita (Bahasa Indonesia)"
              isRequired={true}
            />
            <TextInput
              handleChange={handleChange}
              data={formData.titleEnglish}
              name="titleEnglish"
              title="Judul Berita (English)"
            />
            <div>
              <TagInput
                name="kategori"
                title="Kategori"
                handleChange={handleChange}
              />
            </div>
            <Editor
              title="Isi Berita (Bahasa Indonesia)"
              name="isi"
              handleChange={handleChange}
            />
            <Editor
              title="Isi Berita (English)"
              name="bodyEnglish"
              handleChange={handleChange}
            />

            <div>
              <label htmlFor="statusPublikasi" className="block font-medium">
                Status Publikasi
              </label>
              <Dropdown
                name="statusPublikasi"
                options={MOCK_DATA_OPTIONS}
                handleChange={handleChange}
              />
            </div>
            <ImageUploader
              title="Upload Gambar"
              name="gambar"
              onFileChange={handleFileChange}
            />
            <ImagePreview
              title="Tampilan Gambar"
              name="preview-image"
              imageUrl={selectedFile && URL.createObjectURL(selectedFile)}
              imagePlaceholder={"/img/img-placeholder.png"}
            />

            <div className="flex justify-end space-x-4 pt-2">
              <button
                type="button"
                onClick={handleGoBack}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-emerald-500 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
