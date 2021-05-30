import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const Login = (props) => {
  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState(0);
  const [sesion, setSesion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (sesion) {
    //   let login = (
    //     <button type="button" className="btn btn-danger" onClick={buttonHandler}>
    //       SALIR
    //     </button>
    //   );
    //   ReactDOM.render(login, document.getElementById("login"));
    //   let suscripcion = <strong className="margenIzq"></strong>;
    //   ReactDOM.render(suscripcion, document.getElementById("suscripcion"));
    // } else {
    //   let login = <strong className="margenIzq">Login</strong>;
    //   ReactDOM.render(login, document.getElementById("login"));
    //   let suscripcion = <strong>Suscripción</strong>;
    //   ReactDOM.render(suscripcion, document.getElementById("suscripcion"));
    //   setSesion(false);
    // }

    if (usuario === "admin" && password === 1234) {
      alert("ingreso valido");
      props.history.push("/login/admin");
      setSesion(true);
      console.log(sesion);
    } else {
      alert("ingreso invalido");
      setSesion(false);
      console.log(sesion);
    }
  };

  // Función para cerrar sesión
  // buttonHandler() {
  //   setSesion(false);
  //   Swal.fire({
  //     title: "¿Está seguro que desea salir de la sesión?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Si, salir",
  //     cancelButtonText: "Cancelar",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Ha salido de la sesión", " ", "success");
  //       setSesion(false);
  //     }
  //   });
  // }

  return (
    <Container className="d-flex justify-content-center">
      <Form className="my-3" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <Form.Group className="my-3">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPassword(parseFloat(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Button className="my-3" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
