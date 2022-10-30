import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Button,
  ErrorMsg,
  FormInner,
  FormWrapper,
  Input,
  Label,
} from './AddContactsForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().min(3,'The name is to short').max(30, 'The name is to long').matches(nameRegExp, 'Name is not valid').required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const AddContactsForm = ({ addContact, contacts, toggle }) => {
  const handleSubmit = (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isInclude) {
      Notify.failure(`${values.name} is already in contacts`);
      return;
    }
    values.id = nanoid(6);
    addContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Form autoComplete="off">
          <FormInner>
            <Label htmlFor="name">
              Name
              <Input
                id="name"
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorMsg name="name" component="div" />
            </Label>

            <Label htmlFor="number">
              Number
              <Input
                id="number"
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMsg name="number" component="div" />
            </Label>
          </FormInner>
          <Button type="submit">Add contact</Button>
          <Button onClick={() => toggle('form')} type="button">
            Cancel
          </Button>
        </Form>
      </FormWrapper>
    </Formik>
  );
};

export default AddContactsForm;

AddContactsForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
  toggle: PropTypes.func,
};
