import React from 'react';
import './hcadrecordlist.css';
import HcadData from '../hcaddata/hcaddata';
import FetchDataPureFunction from '../FetchDataPureFunction';

const Hcadrecordlist = () => (
    <React.Fragment>
        <FetchDataPureFunction />
        <HcadData />
    </React.Fragment>
);

Hcadrecordlist.propTypes = {};

Hcadrecordlist.defaultProps = {};

export default Hcadrecordlist;
