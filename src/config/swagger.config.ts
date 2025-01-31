import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { Express } from 'express';

const swaggerDocument: swaggerUi.JsonObject = YAML.load(
  path.resolve(__dirname, '../docs/swagger.yaml')
);

interface SwaggerOptions {
  customCss: string;
  customSiteTitle: string;
  customfavIcon: string;
  swaggerOptions: {
    persistAuthorization: boolean;
    tryItOutEnabled: boolean;
    displayRequestDuration: boolean;
    filter: boolean;
  };
}

const swaggerOptions: SwaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Messages API Documentation",
  customfavIcon: "/assets/favicon.ico",
  swaggerOptions: {
    persistAuthorization: true,
    tryItOutEnabled: true,
    displayRequestDuration: true,
    filter: true
  }
};

export const setupSwagger = (app: Express): void => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, swaggerOptions)
  );
};
