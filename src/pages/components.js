import Input from "@/components/Input";
import { useForm, Controller } from "react-hook-form";

export default function Components() {
  const { register, handleSubmit, control } = useForm();

  const submit = (dados) => {
    console.log(dados);
  };

  return (
    <>
      <h1>Componente personalizado</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="matricula">Matricula:</label>
          <Controller
            name="matricula"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </div>

        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </>
  );
}
