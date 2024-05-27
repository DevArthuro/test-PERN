import { NextPage } from "next";
import Error, { ErrorProps } from "next/error";

const CustomErrorPage: NextPage<ErrorProps> = (props) => {
  const { statusCode } = props;
  return <Error statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = async (contextData): Promise<ErrorProps> => {
  return Error.getInitialProps(contextData);
};

export default CustomErrorPage;
