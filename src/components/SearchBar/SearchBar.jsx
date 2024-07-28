import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from 'react-icons/io5';
import s from './SearchBar.module.css';

const notify = () => toast('You forgot to describe the image');

export default function SearchBar({ onSearch }) {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query === '') {
            notify();
          } else {
            onSearch(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.btn} type="submit">
            <IoSearchOutline className={s.icon} size="20" />
          </button>
          <Toaster position="top-right" />
        </Form>
      </Formik>
    </header>
  );
}