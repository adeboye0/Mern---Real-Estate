import React, { Component } from 'react';
import { TabPane, FormGroup, Label, CustomInput } from 'reactstrap';


class Image extends Component {
    state = {}
    render() {
        return (
        <TabPane tabId="2" className="tab-pane fade show" aria-labelledby="tab-02-tab">
            <FormGroup>
                <CustomInput type="file" id="customFile" name="customFile" label="Select Property picture!" />
            </FormGroup>

        </TabPane>
        );
    }
}

export default Image;

