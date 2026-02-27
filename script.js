const scribd_link = document.getElementById("scribd_link");

console.log(scribd_link);

const link_format = new URL(scribd_link);

console.log(link_format);

// const scribd_splitted_link = scribd_link.split("/");

// const document_id = https://www.scribd.com/document/123456789/example

// const bypassed_link = `https://www.scribd.com/embeds/${document_id}/content?start_page=1&view_mode=scroll`;

// console.log(bypassed_link);