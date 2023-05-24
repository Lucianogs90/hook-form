import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            {...register("nome", {
              required: "O nome não pode ficar em branco",
              minLength: {
                value: 5,
                message: "O campo deve ter mais de 5 caracteres",
              },
              maxLength:{
                value: 20,
                message: "O campo deve ter no máximo 20 caracteres"
              }
            })}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
        </div>

        <button>Cadastrar</button>
      </form>
    </>
  );
}
