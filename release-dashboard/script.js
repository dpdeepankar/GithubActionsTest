// script.js
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById('table-body');
    const updatedEl = document.getElementById('updated');

    updatedEl.textContent = new Date().toLocaleString();

    data.forEach(run => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${run.name || '—'}</td>
        <td>${run.branch || '—'}</td>
        <td class="status-${run.status}">${run.status}</td>
        <td class="conclusion-${run.conclusion?.toLowerCase() || 'pending'}">${run.conclusion || 'Pending'}</td>
        <td>${new Date(run.created_at).toLocaleString()}</td>
        <td><a href="${run.html_url}" target="_blank">View Run →</a></td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    document.body.innerHTML += '<p style="color:red">Error loading data: ' + err + '</p>';
  });
