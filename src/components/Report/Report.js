import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReportCosts from '../ReportCosts/ReportCosts';
import ReportIncome from '../ReportIncome/ReportIncome';

function Report({ dateMonth, dateYears, categoriesCosts, categoriesIncome, hasError }) {
    return (
        <div>
            <Switch>
                <Route path={`/reports/costs`}>
                    <ReportCosts
                        categoriesCosts={categoriesCosts}
                        dateMonth={dateMonth}
                        dateYears={dateYears}
                        hasError={hasError}
                    />
                </Route>
                <Route path={`/reports/income`}>
                    <ReportIncome
                        categoriesIncome={categoriesIncome}
                        dateMonth={dateMonth}
                        dateYears={dateYears}
                        hasError={hasError}
                    />
                </Route>
                <Redirect to="/reports/costs" />
            </Switch>
        </div>
    );
}

export default Report;
