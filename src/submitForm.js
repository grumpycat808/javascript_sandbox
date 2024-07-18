/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert("Error submitting form!");
  }
}

// Write any JavaScript here.
const hello = () => {
  console.log("Hello");
};
