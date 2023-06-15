import React, { createContext, useState, useEffect } from "react";

const BlogContext = createContext();

export default BlogContext;

export const BlogProvider = ({ children }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("blogData"));
    if (!(storedData && storedData.length > 0)) {
      const newData = [
        {
          id: 1,
          gambar: "http://picsum.photos/200/300",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
          Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
          
          Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.`,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 2,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 3,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 4,
          gambar: "",
          judul: "Judul singkat",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Draft",
        },
        {
          id: 5,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 6,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          kategori: ["kategori1", "kategori2"],
          statusPublikasi: "Published",
        },
        {
          id: 7,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 8,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 9,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 10,
          gambar: "",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
      
      Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
      
      Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.
          `,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
      ];
      localStorage.setItem("blogData", JSON.stringify(newData));
      storedData = JSON.parse(localStorage.getItem("blogData"));
    }
    setData(storedData);
  }, []);

  
  // Mengupdate data konteks dan juga menyimpannya ke penyimpanan
  const updateData = (newData) => {
    // setData(newData);
    localStorage.setItem("blogData", JSON.stringify(newData));
  };

  return (
    <BlogContext.Provider value={{ data, updateData }}>
      {children}
    </BlogContext.Provider>
  );
};
