package model;

import java.util.Objects;

/**
 * Author class with improvements for better reliability and construction.
 */
public class Author {

    private final String authorId;
    private final String authorFirstName;
    private final String authorLastName;
    private final String authorEmail;
    private final String authorUrl;

    // Private constructor to enforce the use of the Builder pattern
    private Author(Builder builder) {
        this.authorId = builder.authorId;
        this.authorFirstName = builder.authorFirstName;
        this.authorLastName = builder.authorLastName;
        this.authorEmail = builder.authorEmail;
        this.authorUrl = builder.authorUrl;
    }

    // Getters
    public String getAuthorId() { return authorId; }
    public String getAuthorFirstName() { return authorFirstName; }
    public String getAuthorLastName() { return authorLastName; }
    public String getAuthorEmail() { return authorEmail; }
    public String getAuthorUrl() { return authorUrl; }

    // Builder Class
    public static class Builder {
        private String authorId;
        private String authorFirstName;
        private String authorLastName;
        private String authorEmail;
        private String authorUrl;

        public Builder authorId(String authorId) {
            this.authorId = authorId;
            return this;
        }

        public Builder authorFirstName(String authorFirstName) {
            this.authorFirstName = authorFirstName;
            return this;
        }

        public Builder authorLastName(String authorLastName) {
            this.authorLastName = authorLastName;
            return this;
        }

        public Builder authorEmail(String authorEmail) {
            this.authorEmail = authorEmail;
            return this;
        }

        public Builder authorUrl(String authorUrl) {
            this.authorUrl = authorUrl;
            return this;
        }

        public Author build() {
            return new Author(this);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Author)) return false;
        Author author = (Author) o;
        return Objects.equals(authorId, author.authorId) &&
               Objects.equals(authorFirstName, author.authorFirstName) &&
               Objects.equals(authorLastName, author.authorLastName) &&
               Objects.equals(authorEmail, author.authorEmail);
    }

    @Override
    public int hashCode() {
        return Objects.hash(authorId, authorFirstName, authorLastName, authorEmail);
    }

    @Override
    public String toString() {
        return "Author{" +
               "authorId='" + authorId + '\'' +
               ", authorFirstName='" + authorFirstName + '\'' +
               ", authorLastName='" + authorLastName + '\'' +
               ", authorEmail='" + authorEmail + '\'' +
               ", authorUrl='" + authorUrl + '\'' +
               '}';
    }
}
