export function handleScrollToContact() {
    const contactUsDiv = document.getElementById("contact-us");
    if (contactUsDiv) {
      contactUsDiv.scrollIntoView({ behavior: "smooth" });
    }
}

export function handleScrollToViewWork() {
    const contactUsDiv = document.getElementById("view-work");
    if (contactUsDiv) {
      contactUsDiv.scrollIntoView({ behavior: "smooth" });
    }
}