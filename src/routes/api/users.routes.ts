import { Router } from 'express';
import * as controllers from '../../controllers/user.controllers';

const routes = Router();
// api/users
routes.route('/').get(controllers.getAll).post(controllers.create);

routes
    .route('/:id')
    .get(controllers.getUser)
    .patch(controllers.update)
    .delete(controllers.del);

// routes.get(':id', controllers.getUser);
// routes.patch('/update-user', controllers.update);
// routes.delete('/delete-user', controllers.del);

export default routes;