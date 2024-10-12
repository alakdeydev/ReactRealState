// eslint-disable-next-line react/prop-types
export default function Button({classType,children,link}){

    

    return (
      <>
        <a
          href={`${link}`}
          className={classType}
        >
          
          {children}
        </a>
      </>
    );
}