const footerElement = document.querySelector("footer");
footerElement.innerHTML = "";
const footer = document.createElement("div");
footer.setAttribute("class", "footer");
footer.innerHTML = `
<footer class="fixed_footer">
    <div class="footer_content">
        <p class="whitetext">Created by <strong>Fadlan Sayyidul Anam</strong></p>
        <hr>
        &copy; 2020 <b>Easy <span class="greeeen">Eats</span><b>
    </div>
</footer>`;
footerElement.appendChild(footer);