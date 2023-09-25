const gethtml = (brand) => {
    let html = '';
    brand.forEach(brands => {
        html += `<img class="logo" style="width: 10%;" src="${brands.logo}"/>`;
        html += `<h2>${brands.manufacturer}</h2>
        <table>
        <th></th><th>name</th><th>Model Number</th><th>Category</th>
        <th>CPU</th><th>Memory</th><th>Storage</th>
        <th>Screen size</th>`;

        brands.models.forEach(model => {
            html += `<tr>`;

            html += `<td><img src="${model.image}" style="width: 25%;" /></td>`;
            html += `<td>${model.name}</td>`;
            html += `<td>${model.modelnumber}</td>`;
            html += `<td>${model.category}</td>`;
            html += `<td>${model.cpu}</td>`;
            html += `<td>${model.memory}</td>`;
            html += `<td>${model.storage}</td>`;


            html += `</td>`

        })

        html += `</table>`
    })
    return html;
}

module.exports = gethtml;