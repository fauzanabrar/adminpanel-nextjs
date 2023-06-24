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

import ConfirmationModal from "components/common/Blogs/Modals/ConfirmationModal";

const MOCK_DATA_OPTIONS = [
  { id: 1, label: "Publikasikan", value: "Published" },
  { id: 2, label: "Simpan Sebagai Draft", value: "Draft" },
];

export default function EditViews({ isOpen, onClose, id }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const context = useContext(BlogContext);
  const toasterContext = useContext(ToasterContext);

  const [formData, setFormData] = useState({});

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const getData = context.data.find((blog) => blog.id === Number(id));
    let contextData = "";
    if (getData) {
      contextData = getData;
    } else {
      contextData = context.data.find((blog) => blog.id === id);
    }
    setFormData(contextData);
  }, [context, id]);

  const handleSubmit = () => {
    const newData = {
      ...formData,
      id,
    };
    
    let itemUpdate = context.data.findIndex((blog) => blog.id === Number(id));

    if (itemUpdate !== -1) {
      context.data[itemUpdate] = newData;
      context.updateData(context.data);
    } else {
      itemUpdate = context.data.findIndex((blog) => blog.id === id);
      if (itemUpdate !== -1) {
        context.data[itemUpdate] = newData;
        context.updateData(context.data);
      } else {
        const indexItem = context.data.findIndex((blog) => blog.id === id);
        if (indexItem !== -1) {
          context.data[indexItem] = newData;
          context.updateData(context.data);
        }
      }
    }

    const successToaster = {
      showToaster: true,
      toasterMessage: "Success mengubah data!",
    };

    toasterContext.updateData({
      toaster: successToaster,
      ...toasterContext,
    });

    router.push("/admin/blogs");
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
    setFormData((prev) => ({ ...prev, gambar: URL.createObjectURL(file) }));
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {isModalOpen && (
        <div className="">
          <ConfirmationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDelete={() => {
              handleSubmit();
            }}
          />
        </div>
      )}
      <div className={cx("bg-white rounded shadow-lg relative  p-4")}>
        <div className="flex items-center justify-start p-4 border-b">
          <button onClick={handleGoBack}>
            <i className={"fas fa-chevron-left mr-2 text-sm "}></i>{" "}
          </button>
          <h2 className="ml-2 text-xl font-medium">Edit</h2>
        </div>
        <div className="p-4">
          <form
            onSubmit={(e) => {
              setIsModalOpen(true);
              e.preventDefault();
            }}
            className="space-y-4"
          >
            <input type="hidden" name="id" defaultValue={formData?.id} />
            <input
              type="hidden"
              name="penulis"
              defaultValue={formData?.penulis}
            />
            <input
              type="hidden"
              name="publishDate"
              defaultValue={formData?.publishDate}
            />
            <TextInput
              handleChange={handleChange}
              name="judul"
              title="Judul Berita (Bahasa Indonesia)"
              data={formData?.judul}
            />
            <TextInput
              handleChange={handleChange}
              name="titleEnglish"
              title="Judul Berita (English)"
              data={formData?.titleEnglish}
            />
            <div>
              <TagInput
                name="kategori"
                title="Kategori"
                defaultTags={formData?.kategori}
                handleChange={handleChange}
              />
            </div>
            <Editor
              title="Isi Berita (Bahasa Indonesia)"
              name="isi"
              data={formData?.isi}
              handleChange={handleChange}
            />
            <Editor
              title="Isi Berita (English)"
              name="bodyEnglish"
              data={formData?.bodyEnglish}
              handleChange={handleChange}
            />

            <div>
              <label htmlFor="status" className="block font-medium">
                Status Publikasi
              </label>
              <Dropdown
                name="statusPublikasi"
                options={MOCK_DATA_OPTIONS}
                selectDefault={formData?.statusPublikasi}
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
              imageUrl={
                selectedFile
                  ? selectedFile && URL.createObjectURL(selectedFile)
                  : formData?.gambar
              }
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
