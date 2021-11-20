import React from 'react';
import { TitleError } from '../ReportCosts/ReportCosts.styled';
import { ImSad } from 'react-icons/im';

function ReportIncomeError() {
    return (
        <div>
            <TitleError>
                У вас не было доходов в этом месяце &nbsp;
                <ImSad color="var(--accent-color)" size="30px" />
            </TitleError>
        </div>
    );
}

export default ReportIncomeError;
