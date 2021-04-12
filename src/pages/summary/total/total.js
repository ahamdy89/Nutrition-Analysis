import React from 'react';
import { useSelector } from 'react-redux';
import './total.scss';



const TotalNutrition = () => {
  const total = useSelector(state => state.analayzedResults)
    return(
        <div className="performance-facts">
            <div className="performance-facts__header">
                <h1 className="performance-facts__title">Nutrition Facts</h1>
            </div>
            <table className="performance-facts__table">
                <thead>
                <tr>
                    <th colSpan="3" className="small-info">
                    Amount Per Serving
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colSpan="2">
                    <b>Calories</b>
                    
                    </th>
                    <td>
                    {total?.calories}
                    </td>
                </tr>
                <tr className="thick-row">
                    <td colSpan="3" className="small-info">
                    <b>% Daily Value*</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Total Fat</b>
                    {total.totalNutrients.FAT ? ` ${total.totalNutrients.FAT.quantity.toFixed()}${total.totalNutrients.FAT.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.FAT ? ` ${total.totalDaily.FAT.quantity.toFixed()}${total.totalDaily.FAT.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                    Saturated Fat
                    {total.totalNutrients.FASAT ? ` ${total.totalNutrients.FASAT.quantity.toFixed()}${total.totalNutrients.FASAT.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.FASAT ? ` ${total.totalDaily.FASAT.quantity.toFixed()}${total.totalDaily.FASAT.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                    Trans Fat
                    {total.totalNutrients.FATRA ? ` ${total.totalNutrients.FATRA.quantity.toFixed()}${total.totalNutrients.FATRA.unit}`  : null}

                    </th>
                    <td>
                    <b>{total.totalDaily.FATRA  ? ` ${total.totalDaily.FATRA.quantity.toFixed()}${total.totalDaily.FATRA.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Cholesterol</b>
                    {total.totalNutrients.CHOLE ? ` ${total.totalNutrients.CHOLE.quantity.toFixed()}${total.totalNutrients.CHOLE.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.CHOLE ? ` ${total.totalDaily.CHOLE.quantity.toFixed()}${total.totalDaily.CHOLE.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Sodium</b>
                    {total.totalNutrients.NA ? ` ${total.totalNutrients.NA.quantity.toFixed()}${total.totalNutrients.NA.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.NA ? ` ${total.totalDaily.NA.quantity.toFixed()}${total.totalDaily.NA.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Total Carbohydrate</b>
                    {total.totalNutrients.CHOCDF ? ` ${total.totalNutrients.CHOCDF.quantity.toFixed()}${total.totalNutrients.CHOCDF.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.CHOCDF ? ` ${total.totalDaily.CHOCDF.quantity.toFixed()}${total.totalDaily.CHOCDF.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                    Dietary Fiber
                    {total.totalNutrients.FIBTG ? ` ${total.totalNutrients.FIBTG.quantity.toFixed()}${total.totalNutrients.FIBTG.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.FIBTG ? ` ${total.totalDaily.FIBTG.quantity.toFixed()}${total.totalDaily.FIBTG.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                    Sugars
                    {total.totalNutrients.SUGAR ? ` ${total.totalNutrients.SUGAR.quantity.toFixed()}${total.totalNutrients.SUGAR.unit}`  : null}
                    </th>
                    <td>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Protein</b>
                    {total.totalNutrients.PROCNT ? ` ${total.totalNutrients.PROCNT.quantity.toFixed()}${total.totalNutrients.PROCNT.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.PROCNT ? ` ${total.totalDaily.PROCNT.quantity.toFixed()}${total.totalDaily.PROCNT.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Vitamin C</b>
                    {total.totalNutrients.VITC ? ` ${total.totalNutrients.VITC.quantity.toFixed()}${total.totalNutrients.VITC.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.VITC ? ` ${total.totalDaily.VITC.quantity.toFixed()}${total.totalDaily.VITC.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Calcium</b>
                    {total.totalNutrients.CA ? ` ${total.totalNutrients.CA.quantity.toFixed()}${total.totalNutrients.CA.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.CA ? ` ${total.totalDaily.CA.quantity.toFixed()}${total.totalDaily.CA.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Iron</b>
                    {total.totalNutrients.FE ? ` ${total.totalNutrients.FE.quantity.toFixed()}${total.totalNutrients.FE.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.FE ? ` ${total.totalDaily.FE.quantity.toFixed()}${total.totalDaily.FE.unit}`  : null}</b>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                    <b>Potassium</b>
                    {total.totalNutrients.K ? ` ${total.totalNutrients.K.quantity.toFixed()}${total.totalNutrients.K.unit}`  : null}
                    </th>
                    <td>
                    <b>{total.totalDaily.K ? ` ${total.totalDaily.K.quantity.toFixed()}${total.totalDaily.K.unit}`  : null}</b>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TotalNutrition;