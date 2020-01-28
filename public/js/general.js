  // let landingForm = document.getElementById('landingForm');
  addEventListener("submit", addLeadToDB);

  function addLeadToDB(e) {
      e.preventDefault();
     
      let newLeadObj =
      {
          email: e.target.email.value,
          name: e.target.name.value,
          phone: e.target.phone.value,
          feature:  document.querySelector('input[name="feature"]:checked').value,
          message: e.target.concept.value
      };

      //push new lead to DB
      fetch("/newLeadRouter",
          {
              method: 'POST',
              body: JSON.stringify(newLeadObj),
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      ).then(result => {
          result.json().then(res => {
              this.setState({})
          })
      }

      )
      footer.style.backgroundColor = 'var(--themColor1)';
      footer.style.color = 'var(--themColor2)';

      e.target.email.value = '';
      e.target.name.value = '';
      e.target.phone.value = '';
      e.target.feature.value = '';
      e.target.concept.value = '';
      thankYou.innerText='thanks! we recived your message';
  }