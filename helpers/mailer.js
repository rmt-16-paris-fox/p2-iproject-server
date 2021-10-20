function htmlMail(recipes) {
  let html = "";

  for (const recipe of recipes) {
    const obj = recipe.recipe;
    const ingredient = obj.ingredientLines.map((el) => {
      return `<li>${el}</li>`;
    });
    html += `
        <h2>${obj.label}</h2>
        <img style="width:200px; height: 200px;" src="${obj.image}" alt="" />
        <p>
            Diet: ${obj.dietLabels.join(",")} <br />
            Serving: ${obj.yield}<br />
            Calories: ${(obj.calories / obj.yield).toFixed(0)}<br />
            Time: ${obj.totalTime} minutes <br />
            Ingredients:
            <ul>
            ${ingredient.join("")}
            </ul>
        </p>
        <br/>
        <br/>
    `;
  }

  return html;
}

module.exports = { htmlMail };
