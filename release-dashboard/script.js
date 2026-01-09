fetch('data.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load data.json');
    return response.json();
  })
  .then(data => {
    const tbody = document.getElementById('table-body');
    if (!Array.isArray(data)) {
      tbody.innerHTML = '<tr><td colspan="6">No valid data available</td></tr>';
      return;
    }

    data.forEach(run => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${run.name || '—'}</td>
        <td>${run.branch || '—'}</td>
        <td class="status-$$ {run.status}"> $${run.status}</td>
        <td>${run.conclusion || 'Pending'}</td>
        <td>${new Date(run.created_at).toLocaleString()}</td>
        <td><a href="${run.html_url}" target="_blank">View Run →</a></td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    document.getElementById('table-body').innerHTML = 
      `<tr><td colspan="6" style="color:red">Error: ${err.message}</td></tr>`;
  });
