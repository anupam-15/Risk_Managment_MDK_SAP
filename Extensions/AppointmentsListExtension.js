export default function AppointmentsListExtension(context) {
    let container = document.createElement("div");
    container.style.padding = "10px";

    let appointments = context.getAppClientData().appointments || [];
    if (appointments.length === 0) {
        container.innerText = "No appointments found.";
    } else {
        appointments.forEach(a => {
            let item = document.createElement("div");
            item.style.marginBottom = "10px";
            item.style.borderBottom = "1px solid #ccc";
            item.innerHTML = `<strong>${a.title}</strong><br>${a.date}<br>${a.description}`;
            container.appendChild(item);
        });
    }

    return container;
}
