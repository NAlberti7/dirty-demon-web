import React, { useEffect, useState } from "react";
import Field from "../../molecules/Field/Field";
import Form from "../../atoms/Form/Form";
import Text from "../../atoms/Text/Text";
import styles from "./ConctactForm.module.scss";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../molecules/Button/Button";
import { postSendMail, setMailingResult } from "../../../store/actions/generalActions";

const ContactForm = ({ postSendMail, mailMessage, setMailingResult }) => {
  const { register, errors, watch, handleSubmit, reset, formState } = useForm({
    shouldFocusError: true,
  });
  const [hasSubmit, setHasSubmit] = useState(false);

  useEffect(() => {
    return () => {
      setMailingResult("");
    };
  }, []);
  const onSubmit = (data) => {
    setHasSubmit(true);
    postSendMail(data);
  };

  return (
    <div className={styles.contactForm}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='name'
          type='text'
          placeholder='NOMBRE COMPLETO'
          inputRef={register({
            required: "CAMPO REQUERIDO",
          })}
          error={errors.name}
        />
        <Field
          name='email'
          type='email'
          placeholder='E-MAIL'
          inputRef={register({
            required: "CAMPO REQUERIDO",
          })}
          error={errors.email}
        />
        <Field
          name='message'
          type='email'
          placeholder='TU CONSULTA'
          inputRef={register({
            required: "CAMPO REQUERIDO",
          })}
          error={errors.message}
          isTextArea
        />
        {mailMessage && (
          <Text
            tag='p'
            size={12}
            weight='semibold'
            align='left'
            color='orange'
            customStyle={styles.error}
          >
            {mailMessage}
          </Text>
        )}
        <Button type='submit' disabled={hasSubmit}>
          ENVIAR CONSULTA
        </Button>
        <Text tag='p' size={14} weight='semibold' align='left' color='white' opacity={0.2}>
          TIEMPO APROXIMADO DE RESPUESTA 2 HRS.
        </Text>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mailMessage: state.general.mailMessage,
});

export default connect(mapStateToProps, { postSendMail, setMailingResult })(ContactForm);
