import { TabsFormUrl } from "@/components/ui/tabs-form-url";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] max-h-screen">
      <div className="pb-8 max-w-5xl">
        <h1 className="text-5xl font-extrabold mb-1.5 text-center">
          Passe curto, <span className="text-green-500">alcance gigante.</span>
        </h1>

        <h2 className="text-3xl font-semibold mb-10 text-center">
          Transforme links gigantes em passes perfeitos ⚽
        </h2>

        <p className="text-xl text-center mb-16">
          Seu link está mais longo que prorrogação? Encurte agora e faça um
          passe certeiro para quem vai acessar. Crie URLs curtas,
          personalizadas e prontas para entrar em campo e serem compartilhadas
          com qualquer torcida.
        </p>

        <div className="flex justify-center gap-8 text-center text-sm font-medium">
          <div>
            <p className="text-green-500 text-2xl">⚡</p>
            <p>Rápido</p>
          </div>

          <div>
            <p className="text-green-500 text-2xl">🔗</p>
            <p>Personalizado</p>
          </div>

          <div>
            <p className="text-green-500 text-2xl">📊</p>
            <p>Estatísticas</p>
          </div>

          <div>
            <p className="text-green-500 text-2xl">🛡️</p>
            <p>Seguro</p>
          </div>
        </div>
      </div>

      <TabsFormUrl />
    </section>
  );
}