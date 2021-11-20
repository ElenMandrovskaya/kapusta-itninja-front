import React from 'react';
import { TitleError } from './ReportCosts.styled';
import { ImSad } from 'react-icons/im';

function ReportCostError() {
    return (
        <div>
            <TitleError>
                У вас не было транзакций в этом месяце &nbsp;
                <ImSad color="var(--accent-color)" size="30px" />
            </TitleError>
        </div>
    );
}

export default ReportCostError;
