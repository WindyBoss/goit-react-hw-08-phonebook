/** @format */

import { useState, useEffect } from "react";

import { useGetContactsQuery } from "service/apiService";

import ContactSuccess from "./components/ContactSuccess";
import Pending from "components/Pending";
import ErrorBoundary from "components/ErrorBoundary";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const { data, isLoading, isSuccess, isError, error } = useGetContactsQuery({
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    data && setContacts(data);
  }, [data]);

  let context = "";

  if (isSuccess) {
    context = <ContactSuccess contacts={contacts} />;
  } else if (isLoading) {
    context = <Pending />;
  } else if (isError) {
    context = <ErrorBoundary errorMessage={error.message} />;
  }

  return <>{context}</>;
}

export default Contacts;
