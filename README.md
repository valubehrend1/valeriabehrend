
  # One-page portfolio website

  This is a code bundle for One-page portfolio website. The original project is available at https://www.figma.com/design/BnNxpAysRrprcwCIQVFNlQ/One-page-portfolio-website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

    ## Contact form (EmailJS, no backend)

    1. Create an account in EmailJS and configure an Email Service.
    2. Create an Email Template and add variables:
      - `to_email`
      - `from_name`
      - `from_email`
      - `project_type`
      - `message`
      - `formatted_message`
      - `sent_at`
    3. Copy `.env.example` to `.env.local` and fill in your IDs/keys.

    Example template body:

    ```
    New portfolio contact

    To: {{to_email}}
    Name: {{from_name}}
    Email: {{from_email}}
    Project Type: {{project_type}}
    Sent: {{sent_at}}

    {{formatted_message}}
    ```
  