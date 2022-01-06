import React from "react";
import { Steps } from 'antd';
const { Step } = Steps;

function StepBar() {
    return (
        <Steps current={1}>
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" />
        </Steps>
    )
}

export default StepBar

