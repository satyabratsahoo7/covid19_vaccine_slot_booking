    const studentForm = document.getElementById("studentForm")
	const studentsContainer = document.querySelector(".students");
	const nameInput = studentForm["name"];
	const ageInput = studentForm["age"];
	const phnInput = studentForm["phn"];
	const emailInput = studentForm["email"];
	const adhaarInput = studentForm["adhaar"];
	const addressInput = studentForm["address"];
	const dateInput = studentForm["date"];
	

	const students = JSON.parse(localStorage.getItem("students")) || [];
	

	const addStudent = (name, age, phn, email, adhaar, address, date) => {
	  students.push({
	    name,
	    age,
	    phn,
	    email,
	    adhaar,
	    address,
	    date,
	  });
	

	  localStorage.setItem("students", JSON.stringify(students));
	

	  return { name, age, phn, email, adhaar, address, date };
	};
	

	const createStudentElement = ({ name, age, phn, email, adhaar, address, date }) => {
	  // Create elements
	  const studentDiv = document.createElement("div");
	  const studentName = document.createElement("h2");
	  const studentAge = document.createElement("p");
	  const studentPhn = document.createElement("p");
	  const studentEmail = document.createElement("p");
	  const studentAdhaar = document.createElement("p");
	  const studentAddress = document.createElement("p");
	  const studentDate = document.createElement("p");
	

	  // Fill the content
	  studentName.innerText = "Name: " + name;
	  studentAge.innerText = "Age: " + age;
	  studentPhn.innerText = "Phone number: " + phn;
	  studentEmail.innerText = "Email-id: " + email;
	  studentAdhaar.innerText = "Adhaar number: " + adhaar;
	  studentAddress.innerText = "Address: " + address;
	  studentDate.innerText = "Date: " + date;
	

	  // Add to the DOM
	  studentDiv.append(studentName, studentAge, studentPhn, studentEmail, studentAdhaar, studentAddress, studentDate);
	  studentsContainer.appendChild(studentDiv);
	

	  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
	};
	

	studentsContainer.style.display = students.length === 0 ? "none" : "flex";
	

	students.forEach(createStudentElement);
	

	studentForm.onsubmit = e => {
	  e.preventDefault();
	

	  const newStudent = addStudent(
	    nameInput.value,
	    ageInput.value,
	    phnInput.value,
	    emailInput.value,
	    adhaarInput.value,
	    addressInput.value,
	    dateInput.value
	  );
	

	  createStudentElement(newStudent);
	

	  nameInput.value = "";
	  ageInput.value = "";
	  phnInput.value = "";
	  emailInput.value = "";
	  adhaarInput.value = "";
	  addressInput.value = "";
      dateInput.value = "";
	};

