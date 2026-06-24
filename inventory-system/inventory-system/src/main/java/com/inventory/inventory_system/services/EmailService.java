package com.inventory.inventory_system.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender sender;

    public void sendLowStockEmail(
            String product,
            int quantity
    ) {

        try {

            SimpleMailMessage msg =
                    new SimpleMailMessage();

            msg.setFrom(
                    "ssuchithrahb@gmail.com"
            );

            msg.setTo(
                    "ssuchithrahb@gmail.com"
            );

            msg.setSubject(
                    "Low Stock Alert"
            );

            msg.setText(
                    "Product "
                    + product
                    + " has low stock.\n"
                    + "Current Quantity: "
                    + quantity
            );

            sender.send(msg);

            System.out.println(
                    "Email Sent Successfully"
            );

        } catch (Exception e) {

            System.out.println(
                    "Email Failed"
            );

            e.printStackTrace();

        }

    }

}