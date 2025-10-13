<?php

declare(strict_types=1);

namespace App\Controller;

use Cake\Datasource\ConnectionManager;
use Cake\Event\EventInterface;

class ContactsController extends \Cake\Controller\Controller
{
    public function initialize(): void
    {
        parent::initialize();

        $this->loadComponent('RequestHandler');
    }

    public function testConnection()
    {
        $data = [
            'success' => true,
            'message' => 'Backend CakePHP działa poprawnie!',
            'timestamp' => date('Y-m-d H:i:s')
        ];

        return $this->response
            ->withType('application/json')
            ->withStringBody(json_encode($data));
    }

    public function add()
    {
        $contact = $this->Contacts->newEmptyEntity();
        $data = $this->request->getData();

        $contact = $this->Contacts->patchEntity($contact, $data);

        if ($this->Contacts->save($contact)) {
            return $this->response
                ->withType('application/json')
                ->withStringBody(json_encode([
                    'success' => true,
                    'message' => 'Wiadomość wysłana!',
                    'saved_id' => $contact->id
                ]));
        } else {
            return $this->response
                ->withType('application/json')
                ->withStringBody(json_encode([
                    'success' => false,
                    'message' => 'Błąd walidacji',
                    'errors' => $contact->getErrors()
                ]));
        }
    }
    
}
