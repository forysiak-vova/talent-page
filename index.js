document.querySelector(".burger").addEventListener("click", () => {
  const htmlString = `
   <span class="close-icon"></span>
   <ul>
      <li>
         <a href="#" title="Home">Home</a>
      </li>
      <li>
         <a href="#" title="Portfolio">Services</a>
      </li>
      <li>
         <a href="#" title="Services">About Us</a>
      </li>
      <li>
         <a href="#" title="Contact">Log in</a>
      </li>
   </ul>
 `;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = htmlString;
  document.body.append(modal);
  document.body.classList.add("overflow-hidden");
  document.querySelector(".close-icon").addEventListener("click", (e) => {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
  });
});
