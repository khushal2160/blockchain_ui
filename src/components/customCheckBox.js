import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RectangleBox from "../assets/images/rectangle-box@2x.png"
import CheckedIcon from "../assets/images/checked@2x.png"

export default function CustomCheckBox(props) {
  const { icon, checkedIcon, name, value, className, label, labelPlacement } = props;
  return (
    <FormGroup row>
      <FormControlLabel
          {...props}
          className={`${className} custom_checkbox`}
          value={value}
          control={
            <Checkbox
              icon={icon || <img src={RectangleBox}/>}
              checkedIcon={checkedIcon || <img src={CheckedIcon}/>}
              name={name} />
          }
          label={label}
          labelPlacement={labelPlacement}
        />
    </FormGroup>
  );
}
