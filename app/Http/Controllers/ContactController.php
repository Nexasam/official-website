<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController
{
    public function __invoke(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'firstName' => ['required', 'string', 'max:100'],
            'lastName' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email:rfc', 'max:255'],
            'company' => ['nullable', 'string', 'max:150'],
            'service' => ['required', 'string', 'max:100'],
            'budget' => ['nullable', 'string', 'max:100'],
            'message' => ['required', 'string', 'min:20', 'max:5000'],
        ]);

        $body = implode("\n", [
            "Name: {$data['firstName']} {$data['lastName']}",
            "Email: {$data['email']}",
            'Company: '.($data['company'] ?: 'N/A'),
            "Service: {$data['service']}",
            'Budget: '.($data['budget'] ?? 'Not specified'),
            '',
            'Project details:',
            $data['message'],
        ]);

        Mail::raw($body, function ($mail) use ($data): void {
            $mail->to(config('mail.contact_address', 'info@nexasam.com'))
                ->replyTo($data['email'], "{$data['firstName']} {$data['lastName']}")
                ->subject("New Project Inquiry from {$data['firstName']} {$data['lastName']}");
        });

        return back()->with('success', 'Message sent successfully.');
    }
}
