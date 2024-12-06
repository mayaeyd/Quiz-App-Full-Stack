import express, { Router } from 'express';

const router = new Router();

router.get('/:id?', getUsers);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;