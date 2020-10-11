import React, {PureComponent, useState} from "react";
import MultiSelect from "react-multi-select-component";
import data from "./counties.json"
export default class Selector extends PureComponent {


    render() {

        let options = data.rules;


        return (

            <div>
                <h1>Select Counties</h1>

                <MultiSelect
                    options={options}
                    value={this.props.selected}
                    onChange={this.props.setSelected}
                    labelledBy={"Select"}
                />
            </div>
        );
    }
}


