import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Field, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
import { Button } from "./button";

export function TabsFormUrl() {
  return (
    <Tabs defaultValue="shortener" className="w-full">
      <TabsList>
        <TabsTrigger className="bg-zinc-900 text-white border-green-500/20" value="shortener">Encurtar um Link</TabsTrigger>
      </TabsList>
      <TabsContent value="shortener">
        <Card className="bg-zinc-900 text-white border-green-500/20 px-5 py-10">
          <CardHeader>
            <CardDescription>Encurtar um link longo</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <form>
              <FieldGroup className="mb-8">
                <Field>
                  <FieldLabel htmlFor="url-original">
                    Cole o link aqui ⚽
                  </FieldLabel>
                  <Input
                    id="url-original"
                    placeholder="https:// www.exemplodeurllonga.com.br/esta-e-uma-url-muito-longa-para-eu-compartilhar/por-favor-reduza-ela-para-mim"
                    required
                  />
                </Field>
              </FieldGroup>
              <FieldGroup className="mb-8">
                <Field>
                  <FieldLabel htmlFor="url-alias">
                    Personalize a URL: https://min.com/
                  </FieldLabel>
                  <Input id="url-alias" placeholder="info5" required />
                </Field>
              </FieldGroup>
              <Button>Encurtar link gratuitamente</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
