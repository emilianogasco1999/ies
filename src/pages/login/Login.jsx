import React from 'react'
import Breadcrumbs from '../../components/gen/breadcrumbs/Breadcrumbs'
import InputFrom from '../../components/gen/input/inputForm/InputFrom'
import loginDraw from '../../assets/img/svg/loginDraw.svg'

const Login = () => {
  return (
    <>
      <Breadcrumbs
        title={'Iniciar Sesion'}
      />
      <div className="container">

        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src={loginDraw}
                class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mt-lg-0 mt-4">
              <form>
                <InputFrom
                  type={'number'}
                  id={'dni'}
                  title={'DNI (sin puntos)'}
                />
                <InputFrom
                  type={'password'}
                  id={'password'}
                  title={'Contraseña'}
                />
              <button

                className="btn-contac d-block"
                type="submit">
                Iniciar Sesion
              </button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login