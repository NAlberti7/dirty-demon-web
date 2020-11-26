import React, { useEffect, useState } from "react";
import Field from "../../molecules/Field/Field";
import Form from "../../atoms/Form/Form";
import Text from "../../atoms/Text/Text";
import styles from "./TrackingForm.module.scss";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../molecules/Button/Button";
import { postSendTracking, setTrackingResult } from "../../../store/actions/generalActions";

const ContactForm = ({ postSendTracking, trackingResult, setTrackingResult }) => {
  const { register, errors, watch, handleSubmit, reset, formState } = useForm({
    shouldFocusError: true,
  });
  const [hasSubmit, setHasSubmit] = useState(false);

  useEffect(() => {
    return () => {
      setTrackingResult("");
    };
  }, []);
  const onSubmit = (data) => {
    setHasSubmit(true);
    postSendTracking(data);
  };

  return (
    <div className={styles.contactForm}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='trackingNumber'
          type='text'
          placeholder='CODIGO DE SEGUIMIENTO'
          inputRef={register({
            required: "CAMPO REQUERIDO",
          })}
          error={errors.name}
        />
        {trackingResult && (
          <Text
            tag='p'
            size={12}
            weight='semibold'
            align='left'
            color='orange'
            customStyle={styles.error}
          >
            {trackingResult}
          </Text>
        )}
        <Button type='submit' disabled={hasSubmit}>
          CONSULTAR
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trackingResult: state.general.trackingResult,
});

export default connect(mapStateToProps, { postSendTracking, setTrackingResult })(ContactForm);
