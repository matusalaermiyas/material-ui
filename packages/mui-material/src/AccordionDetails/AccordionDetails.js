import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { getAccordionDetailsUtilityClass } from './accordionDetailsClasses';

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
};

const AccordionDetailsRoot = styled('div', {
  name: 'MuiAccordionDetails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  padding: theme.spacing(1, 2, 2),
}));

const AccordionDetails = React.forwardRef(function AccordionDetails(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiAccordionDetails' });
  const { className, ...other } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);

  return (
    <AccordionDetailsRoot
      className={clsx(classes.root, className)}
      ref={ref}
      ownerState={ownerState}
      {...other}
    />
  );
});

AccordionDetails.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default AccordionDetails;
