const tables = [...document.querySelectorAll("table.tableRtn, table[id=tableRtn]")];

tables.forEach((table) => {
  const timeSlots = table.querySelectorAll("th");
  let timeSlotsText = [
    "p",
    "09:00 AM to 09:45 AM",
    "09:45 AM to 10:30 AM",
    "10:30 AM to 11:15 AM",
    "11:15 AM to 12:00 PM",
    "12:00 PM to 12:45 PM",
    "12:45 PM to 01:30 PM",
    "02:00 PM to 02:45 PM",
    "02:45 PM to 03:30 PM",
  ];

  for (let i = 1; i < timeSlots.length && i < timeSlotsText.length; i++) {
    timeSlots[i].textContent = timeSlotsText[i];
  }
});
