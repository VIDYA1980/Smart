// Get the form and report content elements
const form = document.getElementById('project-report-form');
const reportContent = document.getElementById('report-content');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const aim = document.getElementById('aim-input').value;
  const apparatus = document.getElementById('apparatus-input').value;
  const theory = document.getElementById('theory-input').value;
  const result = document.getElementById('result-input').value;

  // Generate the report content
  const report = `
    <p><strong>AIM:</strong> ${aim}</p>
    <p><strong>APPARATUS:</strong> ${apparatus}</p>
    <p><strong>THEORY:</strong> ${theory}</p>
    <p><strong>RESULT:</strong> ${result}</p>
  `;

  // Set the generated report content in the report content element
  reportContent.innerHTML = report;
});
